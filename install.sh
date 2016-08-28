#!/usr/bin/env bash
# Use this script to install packages
# Which use native modules
# To prevent overwritting normal nodejs headers
# thanks to @Kishan

# Source our vars
. "$PWD/setup-x64.sh"

# Make electron build dir if not exists
mkdir -p ~/.electron-gyp

# Run
HOME=~/.electron-gyp npm install "$@"
