db.parent_reference.aggregate([
  {
    $graphLookup: {
      from: 'parent_reference',
      startWith: '$reports_to',
      connectFromField: 'reports_to',
      connectToField: '_id',
      as: 'tree',
      restrictSearchWithMatch: { _id: 2}
    }
  }
]).pretty();
