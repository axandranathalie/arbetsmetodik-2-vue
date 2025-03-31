import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
  skipFormatting,

  {
    rules: {
      'no-unused-vars': 'warn', // Varnar för oanvända variabler
      'no-console': 'off', // Tillåt användning av console.log
      'eqeqeq': 'error', // Kräver strikt jämförelse (===)
      'vue/multi-word-component-names': 'off', // Stäng av regel för flerordiga komponentnamn
    },
  },
];
