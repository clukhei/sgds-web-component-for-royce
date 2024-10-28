import remarkGfm from "remark-gfm";
module.exports = {
  stories: [
    "../stories/frameworks/**/*.mdx",
    "../stories/getting-started/**/*.mdx",
    // "../stories/components/*.@(mdx|stories.@(js|jsx|ts|tsx))",
    "../stories/components/Accordion.@(mdx|stories.@(js|jsx|ts|tsx))",
    "../stories/components/Alert.@(mdx|stories.@(js|jsx|ts|tsx))",
    "../stories/components/Button.@(mdx|stories.@(js|jsx|ts|tsx))",
    // "../stories/components/Checkbox.@(mdx|stories.@(js|jsx|ts|tsx))",
    "../stories/components/Input.@(mdx|stories.@(js|jsx|ts|tsx))",
    "../stories/components/Radio.@(mdx|stories.@(js|jsx|ts|tsx))",
    "../stories/components/Masthead.@(mdx|stories.@(js|jsx|ts|tsx))",
    "../stories/components/Progress.@(mdx|stories.@(js|jsx|ts|tsx))",
    "../stories/components/Spinner.@(mdx|stories.@(js|jsx|ts|tsx))",
    "../stories/components/Stepper.@(mdx|stories.@(js|jsx|ts|tsx))",
    "../stories/components/Switch.@(mdx|stories.@(js|jsx|ts|tsx))",
    "../stories/*.mdx"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-mdx-gfm",
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm]
          }
        }
      }
    },
    "@storybook/addon-themes"
  ],
  framework: {
    name: "@storybook/web-components-vite",
    options: {
      builder: {
        viteConfigPath: "./.storybook/storybookVite.config.js"
      }
    }
  },
  staticDirs: ["./static"]
};
