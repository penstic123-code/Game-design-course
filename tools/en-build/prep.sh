#!/bin/bash
cd "$(dirname "$0")"; export PYTHONIOENCODING=utf-8
python entool.py extract $1; python illusprep.py dump $1
