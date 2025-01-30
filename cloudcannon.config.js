module.exports = {
  // Base CloudCannon configuration
  paths: {
    uploads: "public/uploads",
    data: "_data",
    collections: "content",
    layouts: "_layouts"
  },

  // Collections for different content types
  collections_config: {
    pages: {
      path: "content/pages",
      output: true,
      url: "/[slug]",
      _enabled_editors: [
        "visual",
        "content",
        "data"
      ],
      schemas: {
        default: {
          path: "schemas/page.json"
        }
      }
    },
    posts: {
      path: "content/posts",
      output: true,
      url: "/blog/[slug]",
      _enabled_editors: [
        "visual",
        "content",
        "data"
      ],
      schemas: {
        default: {
          path: "schemas/post.json"
        }
      }
    }
  },

  // Visual editor configuration
  _editables: {
    text: {
      italic: true,
      bold: true,
      link: true
    },
    block: {
      format: "p h1 h2 h3 h4 h5 h6",
      bold: true,
      italic: true,
      link: true,
      bulletedlist: true,
      numberedlist: true,
      blockquote: true,
      code: true
    }
  },

  // Data configuration
  data_config: {
    authors: {
      path: "_data/authors.json",
      _enabled_editors: ["data"]
    },
    navigation: {
      path: "_data/navigation.json",
      _enabled_editors: ["data"]
    },
    site_settings: {
      path: "_data/settings.json",
      _enabled_editors: ["data"]
    }
  }
}