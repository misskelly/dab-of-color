import fetchAll from './fetchAll';

describe('fetchAll', () => {
  const mockUrl = 'https://unicolors.com/api/v1/projects';
  const mockResult = [{ id: 1, name: 'Bob' }];
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockResult)
    }));

  it('should fetch using correct url parameter', () => {
    fetchAll(mockUrl);
    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  });

  it('should return all items from database if fetch status ok', async () => {
    const result = await fetchAll(mockUrl);
    await expect(result).toEqual(mockResult);
  });

  it('should return an error if fetch fails', async () => {
    const expected = Error('Error fetching data: I hate it when things do not work the way you want them to.');

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      statusText: 'I hate it when things do not work the way you want them to.',
      ok: false
    }));

    await expect(fetchAll(mockUrl)).rejects.toEqual(expected);
  });
});
