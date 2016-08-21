#!/usr/bin/env bash
# Use this script to install packages
# Which use native modules
# To prevent overwritting normal nodejs headers

# Source our vars
. "$PWD/setup-x64.sh"

# Make dir
mkdir ~/.electron-gyp

# Run
HOME=~/.electron-gyp npm install "$@"
