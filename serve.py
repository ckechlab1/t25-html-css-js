#!/usr/bin/env python3
import subprocess
import sys

# Install livereload if needed
try:
    from livereload import Server
except ImportError:
    print("Installing livereload...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "livereload"])
    from livereload import Server

print("Starting development server with hot reload...")
server = Server()
server.watch('*.html')
server.watch('*.css')
server.watch('*.js')
server.serve(root='.')