# How Does It Work?

This document explains what happens under the hood when you open a file in VSCode with the **Yard58 Form Editor** extension installed.

### Assumptions

- A configuration file named ``yard58-form-editor.config.json`` is present at the root of the current VSCode workspace. This configuration file associates file patterns with form schemas.
- The corresponding form schemas are available in GitHub.

More will be explained about how to create these files in the following sections, but for now, just assume they exist.


### Activation & File Matching

Every time a file is opened in VSCode, the extension reads the ``yard58-form-editor.config.json`` configuration file in the current VSCode workspace root.

That configuration file contains a map of patterns and schema URLs. Example:

```json
{
    "associations": {
        "server.config.json": "https://github.com/yard58/form-schema-examples/blob/main/server-config.schema.json"
    }
}
```

This example configuration says: "Every time a file named ``server.config.json`` is opened, use the form defined at ``https://github.com/yard58/form-schema-examples/blob/main/server-config.schema.json`` to edit it. For any other file, just edit it with the default VSCode editor, i.e. as text."

This example is voluntarily simple, but you can add as many associations as you want and the patterns can be any [VSCode glob pattern](https://code.visualstudio.com/docs/editor/glob-patterns).

:::note
If no ``yard58-form-editor.config.json`` file exists in the root of the current VSCode workspace, the extension all files are opened in a regular VSCode text editor.
:::

The extension looks up this map to determine if the opened file matches a configured pattern.

If the file’s path matches no configured pattern, VSCode opens it with the regular JSON/text editor.

If a matching pattern is found, the extension proceeds to the form workflow. Note that if the opened file matches several patterns, the first one will have precendence.

### Schema Fetch & Caching

Cache lookup:

The first time a given schema URL is used, the extension downloads the schema JSON from that URL and stores it under the ``.yard58-form-editor-schemas`` folder at the root of the current VSCode workspace (the extension automatically creates it if it doesn't already exist).

Tip: Consider adding ``.yard58-form-editor-schemas/`` to your ``.gitignore``.

Staleness check:

On subsequent file opens, the extension checks if there is a newer version of the schema file in GitHub.

If a newer version exists online, it re-downloads; otherwise it keeps the local copy.

Local schema available:

The schema JSON is now available instantly from the cache for parsing.

### Building & Rendering the Form

The extension then reads the cached schema, which describes:

- Fields (types: string, number, boolean, array, object...)
- Layout directives (groups, tabs, order...)
- Validation constraints (min/max, regex, required...)

From this description, the extension instantiates a form inside a custom VSCode editor tab, that allows to edit and save the opened file.


### Putting It All Together

![Flowchart](/img/opening-workflow.png)

### Next Steps

- **Config file syntax**: How to define patterns and associated schemas in the ``yard58-form-editor.config.json`` configuration file?

- **Schema development**: How to define a schema that describes a form to edit a JSON file?



