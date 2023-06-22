{
  $jsonSchema: {
    required: [
      'marca',
      'gradaucio',
      'muntura',
      'color_muntura',
      'color_vidre',
      'preu'
    ],
    properties: {
      muntura: {
        'enum': [
          'flotant',
          'pasta',
          'metàl·lica'
        ]
      }
    }
  }