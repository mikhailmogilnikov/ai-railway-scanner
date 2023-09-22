module: {
  rules: [
    // обрабатываем home.scss с высоким приоритетом
    {
      test: /main\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
      include: path.resolve(__dirname, 'src/styles'),
      priority: 20, // высокий приоритет (больше, чем у других правил)
    },
    // обрабатываем все другие SCSS-файлы, исключая home.scss
    {
      test: /\.scss$/,
      exclude: /main\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
      include: path.resolve(__dirname, 'src/styles'),
      priority: 10, // ниже приоритет, чем у правила для home.scss
    },
    // другие правила
    // ...
  ],
}