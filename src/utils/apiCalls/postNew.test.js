import postNew from './postNew';

describe('postNew', () => {
  const mockUrl = 'www.newUnicorn.com';
  const mockBody = {
    name: 'Fred'
  };

  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        id: 1
      })
    }));

  it('should fetch using correct parameters', () => {
    postNew(mockUrl, mockBody);
    const expectedSecondArg = {
      method: 'POST',
      body: JSON.stringify(mockBody),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    expect(window.fetch).toHaveBeenCalledWith(mockUrl, expectedSecondArg);
  });

  it('should return project id with successfull fetch', async () => {
    const expected = {
      id: 1
    };
    const result = await postNew(mockUrl, mockBody);
    expect(result).toEqual(expected);
  });

  it('should return an error if post fails', async () => {
    const expected = Error('Failed to add project: I hate it when things do not work the way you want them to.');

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      statusText: 'I hate it when things do not work the way you want them to.',
      ok: false
    }));

    await expect(postNew(mockUrl, mockBody)).rejects.toEqual(expected);
  });
});