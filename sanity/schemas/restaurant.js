export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'lat',
      title: 'Latitude of Restaurant',
      type: 'number',
    },
    {
      name: 'long',
      title: 'Longitude of Restaurant',
      type: 'number',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Rating between 1 - 5',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).error("Enter value between 1 - 5"),
    },
    {
      name: 'type',
      title: 'Category',
      type: 'reference',
      to: [{type: "category"}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'dishes',
      title: 'Dishes', 
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [{type: "reference", to: [{type: 'dish'}] }]
    },
  ],
}
