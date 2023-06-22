{
  $jsonSchema: {
    required: [
      'nom',
      'cgonoms',
      'NIF',
      'Telefon',
      'feina'
    ],
    properties: {
      feina: {
        'enum': [
          'cuiner',
          'repartidor'
        ]
      }
    }
  }
}