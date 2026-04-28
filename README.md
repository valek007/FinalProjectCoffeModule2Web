# Barista Codex

## About the Project
Barista Codex is a simple CMS for a specialty coffee shop chain.  
It allows baristas to manage coffee beans, view brewing recipes, and maintain a consistent quality standard across all locations.

The system stores coffee information (origin, flavor profile, recipes) and automatically applies a default "House Standard" recipe to every new bean.

---

## Progress

### Lesson 1
- Implemented language system (XLIFF 2.0)
- Loaded translations from XLIFF files
- Connected frontend with backend for language switching
- UI can now switch between languages correctly

---

### Lesson 2
- Worked with `beansService`
- Implemented loading of all coffee beans
- Backend now provides data for all beans
- Optimized data response using TypeScript types (`smallBeanType`) to send only required fields