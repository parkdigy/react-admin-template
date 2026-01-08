import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import typescriptEslintParser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginPdgReactHooks from '@pdg/react-hook/eslint-plugin';
import WebpackProviderPluginCommonComponent from './webpack/ProvidePlugin.common-component.js';
import WebpackProviderPluginPdgReactComponent from './webpack/ProvidePlugin.pdg-react-component.js';
import WebpackProviderPluginPdgReactForm from './webpack/ProvidePlugin.pdg-react-form.js';
import WebpackProviderPluginPdgReactTable from './webpack/ProvidePlugin.pdg-react-table.js';
import WebpackProviderPluginPdgReactDialog from './webpack/ProvidePlugin.pdg-react-dialog.js';

export default defineConfig([
  ...tseslint.config(eslint.configs.recommended, tseslint.configs.recommended),
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  pluginReactHooks.configs.flat.recommended,
  pluginPdgReactHooks.configs.flat.recommended,
  {
    settings: {
      react: {
        version: 'detect', // Auto-detect React version
      },
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    ignores: ['node_modules/', 'dist/'],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        React: 'writable',
        ...Object.keys({
          ...WebpackProviderPluginCommonComponent,
          ...WebpackProviderPluginPdgReactComponent,
          ...WebpackProviderPluginPdgReactForm,
          ...WebpackProviderPluginPdgReactTable,
          ...WebpackProviderPluginPdgReactDialog,
        }).reduce((acc, key) => {
          acc[key] = 'readonly';
          return acc;
        }, {}),
      },
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      'no-underscore-dangle': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-empty-pattern': 'off',
      'no-useless-constructor': 'warn',
      'react/no-unused-state': 'warn',
      'react/state-in-constructor': ['error', 'always'],
      'react/no-deprecated': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react/no-unescaped-entities': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-undef': ['error', { allowGlobals: true }],
      'no-plusplus': 'error',
      'prefer-template': 'error',
      'jsx-quotes': ['error', 'prefer-single'],
      'react/prop-types': [
        'error',
        { ignore: ['history', 'location', 'match', 'name', 'className', 'style', 'children'] },
      ],
      'prefer-const': [
        'error',
        {
          destructuring: 'any',
          ignoreReadBeforeAssign: false,
        },
      ],
      'lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterSingleLine: true,
        },
      ],
      'react/static-property-placement': [
        'error',
        'property assignment',
        {
          propTypes: 'static public field',
          defaultProps: 'static public field',
        },
      ],
      'no-restricted-syntax': [
        'error',
        {
          selector:
            "TSTypeReference[typeName.left.name='React'][typeName.right.name='FC'], TSTypeReference[typeName.name='FC']",
          message: 'React.FC 사용이 금지되었습니다.',
        },
        {
          selector:
            "CallExpression[callee.object.name='React'][callee.property.name='memo'], CallExpression[callee.name='memo']",
          message: 'React.memo 사용이 금지되었습니다.',
        },
        {
          selector:
            "CallExpression[callee.object.name='React'][callee.property.name='forwardRef'], CallExpression[callee.name='forwardRef']",
          message: 'React.forwardRef 사용이 금지되었습니다.',
        },
      ],
    },
  },
  {
    ignores: ['node_modules/', 'dist/'],
    files: ['webpack/**/*.js', '*.js'],
    languageOptions: {
      globals: {
        module: 'readonly',
        process: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
]);
