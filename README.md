# Lenta's OmiSupportAdmin Design Tokens

This project contains design tokens for export to Figma Variables using the Luckino - Variables Import/Export JSON & CSS plugin.

## Project Structure

- `src/` - source token files
  - `Base colors.tokens.json` - base colours
  - `Components.tokens.json` - component tokens
  - `Semantic colors.tokens.json` - semantic colours
- `merge-tokens.js` - token merging script
- `dist/tokens.json` - merged token file

## Usage

### Building the merged file

```bash
pnpm run build
```

## Output

After running `pnpm run build`, a `tokens.json` file is created in the `dist/` folder with the following structure:

```json
{
  "Base colors": {
    // Contents of Base colors.tokens.json
  },
  "Components": {
    // Contents of Components.tokens.json
  },
  "Semantic colors": {
    // Contents of Semantic colors.tokens.json
  }
}
```

Each source file becomes a separate group in the merged file, where the group name corresponds to the filename (without the `.tokens.json` extension).

## Figma Variables

The merged file is ready for import into Figma Variables:
- Each file = separate mode in Figma Variables
- Uses Material Design 3 variable aliases (September 2025)
- Compatible with Luckino - Variables Import/Export JSON & CSS plugin
