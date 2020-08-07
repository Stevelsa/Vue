'use strict'

const path=require('path')

module.exports={
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: true,
    productionSourceMap:true,

    devServer:{
        host: 'localhost',
        port:8082,
        overlay:{
            warnings:true,
            errors:true
        },
        proxy: {
            '/':{
                target: 'http://localhost:8088',
                changeOrigin:true,
                pathRewrite:{
                    '^/':''
                }
            }
        }
    }
}