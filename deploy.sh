#!/bin/bash

yarn build
gh-pages -d dist/spa
