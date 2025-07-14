# Component Usage Files

This directory contains individual usage files for each Hero Design component

## Structure

- **`index.json`** - Contains a complete index of all components with their file names and descriptions
- **`{component-name}-usage.json`** - Individual usage files for each component

## Components

There are 52 component usage files, each containing:

- `component_name` - The name of the component
- `component_description` - A description of what the component does
- `props` - Detailed props object with type information and descriptions
- `examples` - An array of usage examples with comprehensive descriptions

### Example Component Structure

Each component file follows this structure:

```json
{
  "component_name": "ComponentName",
  "component_description": "Description of the component...",
  "props": {
    "propName": {
      "name": "propName",
      "type": "string | number | boolean",
      "required": true,
      "description": "Description of the prop..."
    }
  },
  "examples": [
    {
      "example_name": "Example Name",
      "example_description": "Detailed description with markdown support...",
      "code": "JSX code example...",
      "purpose_description": "Purpose of this example...",
      "technical_description": "Technical implementation details...",
      "patterns_description": "React patterns demonstrated...",
      "use_cases_description": "Real-world use cases and scenarios..."
    }
  ]
}
```

### Props Object Structure

The `props` object contains detailed information about each component prop:

- **`name`** - The prop name
- **`type`** - TypeScript type definition
- **`required`** - Whether the prop is required (boolean)
- **`description`** - Detailed description of the prop's purpose and usage

### Example Object Structure

Each example in the `examples` array includes:

- **`example_name`** - A descriptive name for the example
- **`example_description`** - Detailed explanation with markdown support, including live code blocks
- **`code`** - The actual JSX code example
- **`purpose_description`** - Explanation of the example's purpose and goals
- **`technical_description`** - Technical implementation details and prop usage
- **`patterns_description`** - React patterns and best practices demonstrated
- **`use_cases_description`** - Real-world scenarios where this example would be useful

## Benefits of This Structure

1. **Better Organization** - Each component has its own file for easier maintenance
2. **Faster Loading** - Load only the component usage you need
3. **Easier Searching** - Find component examples quickly by filename
4. **Better Version Control** - Changes to one component don't affect others
5. **Modular Usage** - Import specific component usage data as needed

## Finding Components

Use the `index.json` file to quickly see all available components and their corresponding files.