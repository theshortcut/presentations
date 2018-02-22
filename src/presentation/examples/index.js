const webpackRequireContext = require.context(
  "!raw-loader!./",
  false,
  /\.example$/
);

export default webpackRequireContext.keys().reduce((map, fileName) => {
  const markdown = webpackRequireContext(fileName);
  if (fileName.startsWith("./")) {
    fileName = fileName.substr(2);
  }
  return map.set(fileName, markdown);
}, new Map());
