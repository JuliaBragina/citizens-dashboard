# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Редактирование

Кнопка «Редактировать» открывает поля основных сведений, контактов и связанных
записей. Черновик сохраняется при переключении вкладок. «Сохранить» проверяет
поля во всех разделах и обновляет карточку и список граждан; «Отменить»
отбрасывает черновик. При уходе с несохранёнными правками появляется предупреждение.
Изменения хранятся только в состоянии приложения до перезагрузки страницы.
Исходный файл с данными не изменяется; API и база данных не используются.

Проверки форм: `node --test src/utils/citizenForm.test.js`.
