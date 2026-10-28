// Keep the vendor chunk names used by the original admin Webpack build.
function getVendorName(module) {
  const context = module.context?.replace(/\\/g, '/');
  const packagePath = context?.split('/node_modules/').pop();
  if (!context?.includes('/node_modules/') || !packagePath) return undefined;

  const [scope, packageName, componentName] = packagePath.split('/');
  if (scope === '@pdg' && packageName) return `vendors/_pdg_${packageName}`;
  if (scope === '@mui' && packageName) {
    if (['material', 'x-date-pickers'].includes(packageName) && componentName) {
      return `vendors/_mui_${packageName}_${componentName.replace('@', '')}`;
    }
    return `vendors/_mui_${packageName}`;
  }
  return `vendors/${scope.replace('@', '')}`;
}

module.exports = {
  chunks: 'all',
  cacheGroups: {
    common: {
      test: /[\\/]node_modules[\\/](react|react-dom|react-router|history|stylis)[\\/]/,
      chunks: 'all',
      name(module) {
        const name = getVendorName(module);
        return name?.replace('vendors/', 'vendors/_common_');
      },
    },
    defaultVendors: {
      test: /[\\/]node_modules[\\/]/,
      chunks: 'all',
      name: getVendorName,
    },
  },
};
