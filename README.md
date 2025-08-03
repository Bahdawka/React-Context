# React Context Example

## Project Description

This project demonstrates the usage of React Context for sharing data between components without prop drilling. It showcases two different approaches to working with context in a React TypeScript application.

### Key Features:
- **PropContext** - Simple context for passing static string values
- **SecondContext** - Stateful context with setter functionality
- Multi-level component hierarchy (Level1 → Level2 → Level3)
- TypeScript integration with proper context typing
- Both Context.Consumer and useContext hook implementations

## How It Works

The application creates a hierarchy of components where data flows through React Context instead of props:

1. **App Component** - Root component that provides both contexts
2. **Level1** - Uses Context.Consumer pattern to access PropContext
3. **Level2** - Uses useContext hook to read PropContext
4. **Level3** - Reads both contexts and can modify SecondContext
5. **SecondContext Component** - Demonstrates state updates through context

### Installation

1. Clone or download the project

2. Navigate to the project directory:
```bash
cd react-context
```

3. Install dependencies:
```bash
npm install
```

4. Running the Project
```bash
npm run dev
```

## Project Structure

```
react-context/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Level1.tsx              # First level component (Context.Consumer)
│   │   ├── Level2.tsx              # Second level component (useContext)
│   │   ├── Level3.tsx              # Third level component (reads & updates context)
│   │   ├── SecondContext.tsx       # Component demonstrating state updates
│   │   └── LevelProps.interface.ts # TypeScript interface definitions
│   ├── context/
│   │   └── AppContext.tsx          # Context definitions and types
│   ├── App.tsx                     # Main application component
│   ├── main.tsx                    # Application entry point
│   ├── index.css                   # Global styles
│   └── vite-env.d.ts               # Vite type definitions
├── index.html                      # HTML template
├── package.json                    # Project dependencies and scripts
└── README.md                       # This file
```

## Component Breakdown

### Context Definitions (`src/context/AppContext.tsx`)
- **PropContext**: Simple context for string values
- **SecondContext**: Typed context with state and setter function

### Component Hierarchy
1. **App.tsx** - Wraps the application with context providers
2. **Level1.tsx** - Demonstrates Context.Consumer pattern
3. **Level2.tsx** - Uses useContext hook to access PropContext
4. **Level3.tsx** - Accesses both contexts and can update SecondContext
5. **SecondContext.tsx** - Shows how to update context state from any component

## Technologies Used

- **React 18** - JavaScript library for building user interfaces
- **TypeScript** - Typed superset of JavaScript
- **Vite** - Fast build tool and development server
- **CSS3** - Styling

## Learning Objectives

This project demonstrates:
- How to create and use React Context
- Difference between Context.Consumer and useContext hook
- Proper TypeScript typing for contexts
- State management through context
- Avoiding prop drilling in component hierarchies
- Best practices for context organization

## Key Concepts Illustrated

1. **Context Creation**: Using `createContext()` with TypeScript types
2. **Provider Pattern**: Wrapping components with context providers
3. **Context Consumption**: Both Consumer component and useContext hook
4. **State Management**: Managing and updating state through context
5. **Type Safety**: TypeScript interfaces for context values

---

# Приклад React Context

## Опис проекту

Цей проект демонструє використання React Context для обміну даними між компонентами без prop drilling. Він показує два різні підходи до роботи з контекстом у React TypeScript додатку.

### Ключові особливості:
- **PropContext** - Простий контекст для передачі статичних рядкових значень
- **SecondContext** - Контекст зі станом та функцією setter
- Багаторівнева ієрархія компонентів (Level1 → Level2 → Level3)
- Інтеграція TypeScript з правильною типізацією контексту
- Реалізація як Context.Consumer, так і useContext hook

## Як це працює

Додаток створює ієрархію компонентів, де дані передаються через React Context замість пропсів:

1. **App Component** - Кореневий компонент, що надає обидва контексти
2. **Level1** - Використовує паттерн Context.Consumer для доступу до PropContext
3. **Level2** - Використовує useContext hook для читання PropContext
4. **Level3** - Читає обидва контексти та може змінювати SecondContext
5. **SecondContext Component** - Демонструє оновлення стану через контекст

### Встановлення

1. Клонуйте або завантажте проект

2. Перейдіть до директорії проекту:
```bash
cd react-context
```

3. Встановіть залежності:
```bash
npm install
```

4. Запуск проекту
```bash
npm run dev
```

## Структура проекту

```
react-context/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Level1.tsx              # Компонент першого рівня (Context.Consumer)
│   │   ├── Level2.tsx              # Компонент другого рівня (useContext)
│   │   ├── Level3.tsx              # Компонент третього рівня (читає та оновлює контекст)
│   │   ├── SecondContext.tsx       # Компонент для демонстрації оновлень стану
│   │   └── LevelProps.interface.ts # Визначення TypeScript інтерфейсів
│   ├── context/
│   │   └── AppContext.tsx          # Визначення контекстів та типів
│   ├── App.tsx                     # Головний компонент додатку
│   ├── main.tsx                    # Точка входу додатку
│   ├── index.css                   # Глобальні стилі
│   └── vite-env.d.ts               # Визначення типів Vite
├── index.html                      # HTML шаблон
├── package.json                    # Залежності та скрипти проекту
└── README.md                       
```

## Розбір компонентів

### Визначення контекстів (`src/context/AppContext.tsx`)
- **PropContext**: Простий контекст для рядкових значень
- **SecondContext**: Типізований контекст зі станом та функцією setter

### Ієрархія компонентів
1. **App.tsx** - Обгортає додаток провайдерами контексту
2. **Level1.tsx** - Демонструє паттерн Context.Consumer
3. **Level2.tsx** - Використовує useContext hook для доступу до PropContext
4. **Level3.tsx** - Отримує доступ до обох контекстів та може оновлювати SecondContext
5. **SecondContext.tsx** - Показує як оновлювати стан контексту з будь-якого компонента

## Використані технології

- **React 18** - JavaScript бібліотека для створення користувацьких інтерфейсів
- **TypeScript** - Типізована надбудова JavaScript
- **Vite** - Швидкий інструмент збірки та сервер розробки
- **CSS3** - Стилізація

## Навчальні цілі

Цей проект демонструє:
- Як створювати та використовувати React Context
- Різницю між Context.Consumer та useContext hook
- Правильну типізацію контекстів у TypeScript
- Управління станом через контекст
- Уникнення prop drilling в ієрархії компонентів

## Ключові концепції, що ілюструються

1. **Створення контексту**: Використання `createContext()` з TypeScript типами
2. **Паттерн Provider**: Обгортання компонентів провайдерами контексту
3. **Споживання контексту**: І Consumer компонент, і useContext hook
4. **Управління станом**: Управління та оновлення стану через контекст
5. **Безпека типів**: TypeScript інтерфейси для значень контексту
