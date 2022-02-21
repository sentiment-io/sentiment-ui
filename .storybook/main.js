module.exports = {
  stories: ['../packages/**/stories/*.stories.tsx'],
  typescript: {
    check: true,
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@react-theming/storybook-addon',
  ],
  framework: '@storybook/react',
};
