# Vrushab-JsonSDK

A lightweight and flexible JSON manipulation library for JavaScript/Node.js applications.

## Features

- Easy JSON parsing and stringification
- Type-safe data handling
- Simple API for JSON operations
- Zero dependencies
- Supports both Node.js and browser environments

## Installation

```bash
npm install vrushab-jsonsdk
```

## Usage

```javascript
const JsonSDK = require("vrushab-jsonsdk");

// Parse JSON string
const jsonString = '{"name": "John", "age": 30}';
const data = JsonSDK.parse(jsonString);

// Modify data
data.age = 31;

// Convert back to JSON string
const updatedJson = JsonSDK.stringify(data);
```

## API Reference

### `parse(jsonString)`

Safely parses a JSON string into a JavaScript object.

### `stringify(data)`

Converts a JavaScript object into a JSON string.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Vrushab

## Support

For support, email [your-email@example.com] or open an issue in the GitHub repository.
