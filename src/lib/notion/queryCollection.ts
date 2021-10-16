import rpc from './rpc'

export default function queryCollection({
  collectionId,
  collectionViewId,
  loader = {},
  query = {},
}: any) {
  return rpc('queryCollection', {
    collectionId,
    collectionViewId,
    loader: {
      type: 'reducer',
      reducers: {
        collection_group_results: {
          type: 'results',
          limit: 50,
        },
        'table:uncategorized:title:count': {
          type: 'aggregation',
          aggregation: {
            property: 'title',
            aggregator: 'count',
          },
        },
      },
      searchQuery: '',
      userTimeZone: 'Asia/Tokyo',
    },
  })
}
