# RTK Learning Project

A React TypeScript project built with Vite and Tailwind CSS, featuring custom reusable UI components designed for learning and experimentation.

## 🚀 Features

This project includes several custom-built components that demonstrate modern React patterns and clean UI design:

### 🧩 Components

#### **SplitPane**

A resizable two-panel layout component with drag-to-resize functionality.

- **Features:**

  - Draggable separator for resizing panels
  - Double-click to reset to 50/50 split
  - Configurable minimum widths
  - Optional title for the entire section
  - Smooth visual feedback and transitions

- **Usage:**
  ```tsx
  <SplitPane
    title="User Management Dashboard"
    leftContent={<UserForm />}
    rightContent={<CodePreview data={userData} />}
    initialLeftWidth={40}
    minLeftWidth={25}
    minRightWidth={30}
  />
  ```

#### **UserForm**

A clean, responsive user registration form built with Tailwind CSS.

- **Fields:** First Name, Last Name, Email, Age
- **Features:** Form validation, focus states, modern styling
- **No internal state** - pure UI component

#### **CodePreview**

A component for displaying objects as formatted code snippets.

- **Features:**

  - JSON formatting with `JSON.stringify(obj, null, 2)`
  - Terminal-like dark theme
  - Error handling for non-serializable objects
  - Configurable title and max height
  - Syntax highlighting-ready

- **Usage:**
  ```tsx
  <CodePreview
    data={{ name: "John", age: 30, hobbies: ["reading", "coding"] }}
    title="User Data"
    maxHeight="300px"
  />
  ```

#### **SeparatedList**

A wrapper component that adds horizontal separator lines between children.

- **Features:**

  - Automatic separator insertion between children
  - No separator after the last child
  - Customizable separator styling
  - Handles single or multiple children
  - Null-safe filtering

- **Usage:**
  ```tsx
  <SeparatedList separatorClassName="border-gray-400 border-2">
    <UserForm />
    <CodePreview data={userData} />
    <AnotherComponent />
  </SeparatedList>
  ```

## 🛠️ Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **ESLint** - Code linting and formatting

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd rtk-learning
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 📁 Project Structure

```
src/
├── components/
│   ├── CodePreview/
│   │   └── CodePreview.tsx
│   ├── SeparatedList/
│   │   └── SeparatedList.tsx
│   ├── SplitPane/
│   │   └── SplitPane.tsx
│   └── UserForm/
│       └── UserForm.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## 🎨 Design Philosophy

This project emphasizes:

- **Reusable Components** - Modular, flexible UI components
- **Type Safety** - Full TypeScript integration
- **Modern Patterns** - React hooks, functional components
- **Clean UI** - Tailwind CSS for consistent styling
- **Developer Experience** - Hot reload, linting, and fast builds

## 🔧 Component Architecture

Each component is designed to be:

- **Self-contained** - Minimal external dependencies
- **Configurable** - Extensive prop customization
- **Accessible** - Proper ARIA labels and keyboard navigation
- **Responsive** - Mobile-first design approach
- **Performant** - Optimized rendering and event handling

## 📝 Usage Examples

### Basic Layout

```tsx
function App() {
  return (
    <SeparatedList>
      <SplitPane
        title="User Management"
        leftContent={<UserForm />}
        rightContent={<CodePreview data={userData} />}
      />
    </SeparatedList>
  );
}
```

### Advanced SplitPane Configuration

```tsx
<SplitPane
  title="Development Environment"
  leftContent={<CodeEditor />}
  rightContent={<TerminalOutput />}
  initialLeftWidth={60}
  minLeftWidth={30}
  minRightWidth={20}
  className="h-screen"
/>
```

## 🤝 Contributing

This is a learning project! Feel free to:

- Add new components
- Improve existing functionality
- Fix bugs or improve performance
- Enhance documentation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
