export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe0b377c3a372f445602670',
                  title: 'Sanity Studio',
                  name: 'gatsby-next-images-studio',
                  apiId: '3cdb2a39-db24-4796-a5db-9f9936e31ad1'
                },
                {
                  buildHookId: '5fe0b3772386053c4b790c1b',
                  title: 'Blog Website',
                  name: 'gatsby-next-images',
                  apiId: 'e83855d6-24fd-4c71-98c0-0aec5d872fa0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marconucara/gatsby-next-images',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://gatsby-next-images.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
