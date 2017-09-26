'use strict';

import gulp from 'gulp';
import webpack from 'webpack';
import path from 'path';
import sync from 'run-sequence';
import rename from 'gulp-rename';
import template from 'gulp-template';
import fs from 'fs';
import yargs from 'yargs';
import _ from 'lodash';
import gutil from 'gulp-util';
import serve from 'browser-sync';
import del from 'del';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import colorsSupported from 'supports-color';
import historyApiFallback from 'connect-history-api-fallback';

let root = 'client';

let resolveToComponents = (glob = '') => {
    return path.join(root, 'app/components', glob); // app/components/{glob}
};

// map of all paths
let paths = {
    output: root,
    blankTemplates: {
        page: path.join(__dirname, 'generator', 'page/**/*.**'),
        component: path.join(__dirname, 'generator', 'component/**/*.**')
    },
    dest: path.join(__dirname, 'dist'),
    publicPath: '/'
};

// use webpack.config.js to build modules
gulp.task('webpack', ['clean'], (cb) => {
    const config = require('./webpack.dist.config');

    webpack(config, (err, stats) => {
        if (err) {
            throw new gutil.PluginError("webpack", err);
        }

        gutil.log("[webpack]", stats.toString({
            colors: colorsSupported,
            chunks: false,
            errorDetails: true
        }));

        cb();
    });
});

gulp.task('serve', ['clean'], (cb) => {
    const config = require('./webpack.dev.config');

    var compiler = webpack(config);

    serve({
        port: process.env.PORT || 3000,
        open: false,
        server: {
            baseDir: root
        },
        devtool: "source-map",
        stats: "errors-only",
        middleware: [
            historyApiFallback(),
            webpackDevMiddleware(compiler, {
                stats: {
                    colors: colorsSupported,
                    chunks: false,
                    modules: false
                },
                publicPath: paths.publicPath
            }),
            webpackHotMiddleware(compiler)
        ]
    });

});

gulp.task('watch', ['serve']);

gulp.task('component', () => {
    const cap = (val) => {
        return val.charAt(0).toUpperCase() + val.slice(1);
    };
    const name = yargs.argv.name;
    const parentPath = yargs.argv.parent || '';
    const destPath = path.join(resolveToComponents(), parentPath, name);
    let templatePath = paths.blankTemplates.page;

    if (!yargs.argv.page) {
        templatePath = paths.blankTemplates.component;
        console.log("#### ADD PAGE: import "+ cap(_.camelCase(name)) +" from './" + name + "/" + name + "';");
    }    

    gulp.src(templatePath)
        .pipe(template({
            name: name,
            upCaseName: cap(_.camelCase(name)),
            camelCaseName: _.camelCase(name)
        }))
        .pipe(rename((path) => {
            path.basename = path.basename.replace('temp', name);
        }))
        .pipe(gulp.dest(destPath));
});

gulp.task('clean', (cb) => {
    del(["dist", "build"]).then(function(paths) {
        gutil.log("[clean]", paths);
        cb();
    });
});

gulp.task('default', ['watch']);