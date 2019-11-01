export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5dbbce760f3ac6058f430ec2',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-zxa4vqhg',
                  apiId: '18d19e09-942b-4e77-aa5b-5c141a1efa65'
                },
                {
                  buildHookId: '5dbbce76519ec426325af9ab',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-buo4p2s4',
                  apiId: '9697e5d7-ae0c-45c0-8044-9565d4e04f13'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ilovecat/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-buo4p2s4.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
