import postNew from './postNew';

describe('postNew', () => {
  const mockPath = 'test';
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
    let mockUrl = `https://unicolors.herokuapp.com/api/v1/${mockPath}`
    postNew(mockPath, mockBody);
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
    const result = await postNew(mockPath, mockBody);
    expect(result).toEqual(expected);
  });

  it('should return an error if post fails', async () => {
    let mockUrl = `https://unicolors.herokuapp.com/api/v1/${mockPath}`;
    const expected = Error('Failed to post: I hate it when things do not work the way you want them to.');

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      statusText: 'I hate it when things do not work the way you want them to.',
      ok: false
    }));

    await expect(postNew(mockUrl, mockBody)).rejects.toEqual(expected);
  });
});