import { BuildOptions } from "./types/config";
import  webpack from "webpack"
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolves } from "./build.Resolves";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths, isDev} = options
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options)
            ,
            module: {
                rules: buildLoaders(options)
              },
              resolve: buildResolves(),
              devtool: isDev ? 'inline-source-map' : undefined,
              // для того, чтобы в production режиме не было лишней информации, нагрузки
              devServer: isDev ? buildDevServer(options) : undefined
    }
}