module.exports = {
  // Base CloudCannon configuration
  paths: {
    uploads: "public/uploads",
    data: "_data",
    collections: "content",
    layouts: "_layouts",
  },

  collections: {
    pages: {
      name: "Pages",
      path: "content/pages",
      output: true,
      url: "/[slug]",
      _enabled_editors: ["visual", "content", "data"],
      icon: "wysiwyg",
      create: true,
      add_options: [
        {
          name: "New Page",
          schema: "default",
        },
      ],
      schemas: {
        default: {
          path: "schemas/page.json",
        },
      },
    },
    posts: {
      name: "Blog Posts",
      path: "content/posts",
      output: true,
      url: "/blog/[slug]",
      _enabled_editors: ["visual", "content", "data"],
      icon: "article",
      create: true,
      add_options: [
        {
          name: "New Post",
          schema: "default",
        },
      ],
      schemas: {
        default: {
          path: "schemas/post.json",
        },
      },
    },
  },

  // Visual editor configuration
  _editables: {
    text: {
      italic: true,
      bold: true,
      link: true,
    },
    block: {
      format: "p h1 h2 h3 h4 h5 h6",
      bold: true,
      italic: true,
      link: true,
      bulletedlist: true,
      numberedlist: true,
      blockquote: true,
      code: true,
    },
  },

  // Data configuration
  data_config: {
    authors: {
      path: "_data/authors.json",
      _enabled_editors: ["data"],
      _inputs: {
        authors: {
          type: "array",
          structures: {
            values: {
              type: "object",
              fields: {
                name: { type: "text" },
                bio: { type: "text" },
                avatar: { type: "image" },
              },
            },
          },
        },
      },
    },
    navigation: {
      path: "_data/navigation.json",
      _enabled_editors: ["data"],
      _inputs: {
        main_nav: {
          type: "array",
          structures: {
            values: {
              type: "object",
              fields: {
                label: { type: "text" },
                url: { type: "text" },
              },
            },
          },
        },
      },
    },
    settings: {
      path: "_data/settings.json",
      _enabled_editors: ["data"],
      _inputs: {
        site_title: { type: "text" },
        site_description: { type: "textarea" },
        social_links: {
          type: "object",
          fields: {
            twitter: { type: "text" },
            github: { type: "text" },
            linkedin: { type: "text" },
          },
        },
        footer_text: { type: "text" },
      },
    },
  },

  // Build configuration
  _build: {
    output: "out",
    command: "npm run build",
  },
};
