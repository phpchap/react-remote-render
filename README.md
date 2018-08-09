# Remote render components

Quick proof of concept to demonstate how react components can be rendered via a service and can be consumed via client.

Uses [Zalando tailor](https://github.com/zalando/tailor) and fragment service which is one aspect of [Project Mosiac](https://www.mosaic9.org/)

[Confluence page](http://confluence.ecomm/display/PD/Homepage%3A+Remote+Rendering+of+React+Components#?lucidIFH-viewer-cabe2398=1)

## Overview

Project consists of two parts:

1. client (defines the tailor templates that require fragments, served in a local express server)
2. server (defines the rendered react component fragments e.g. header, footer., served on a local express server)

## Usage:

- open two terminal windows:

1) ./bin/run_client
2) ./bin/run_server

# Todo:

- multiple fragments on one server
- client side running react
- research other aspects of the mosi
