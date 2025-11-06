# LWC Inheritance Project

This project demonstrates the use of inheritance in Salesforce Lightning Web Components (LWC), implementing a reusable modal pattern through abstract base classes.

## Project Architecture

The project consists of three main components that demonstrate the inheritance pattern:

### 1. lightningModal (Base Modal Component)

Parameterized modal component that extends `lightning/modal` and accepts dynamic properties.

**Location:** `force-app/main/default/lwc/lightningModal/`

**API Properties:**
- `modalTitle` - Modal title
- `modalMessage` - Message to be displayed in the modal body
- `buttonLabel` - Confirmation button label

**Features:**
- Responsive modal with header, body, and footer
- Cancel and confirm buttons
- Returns the result of user action ('canceled' or 'confirmed')

### 2. lightningBase (Abstract Base Class)

Base component that provides common functionality for concrete components.

**Location:** `force-app/main/default/lwc/lightningBase/`

**Main Method:**
```javascript
async openModal(title, message, buttonLabel = 'Confirm')
```

**Responsibilities:**
- Manage the opening of the parameterized modal
- Pass parameters to lightningModal
- Return Promise with user interaction result

### 3. accountListExample (Concrete Component)

Concrete implementation that extends `lightningBase` and demonstrates practical use of the pattern. 

**Location:** `force-app/main/default/lwc/accountListExample/`

**Features:**
- Datatable with sample account list
- Columns: Account Name, Industry, Annual Revenue, Phone
- "View Details" action on each row
- Modal opens when clicking the action, showing account details

## How to Use

### Deploy to Org

```bash
sf project deploy start --source-dir force-app/main/default/lwc
```

### Add the Component to a Page

1. Open Lightning App Builder, navigate to an App Page, Record Page, or Home Page
2. Drag the `accountListExample` component to the page, save and activate the page

### Test the Functionality

1. View the page where the component was added
2. Observe the datatable with 5 sample accounts
3. Click the "View Details" button on any row
4. The modal will open displaying the selected account information
5. Click "I got it!" to close or "Cancel" to cancel the action

## Implemented Inheritance Pattern

```
LightningElement
    └── lightningBase (abstract class)
        └── accountListExample (concrete class)

LightningModal
    └── lightningModal (parameterized modal)
```

### Execution Flow

1. User clicks "View Details" on the datatable
2. `accountListExample.handleRowAction()` is executed
3. Method calls `this.openModal()` (inherited from `lightningBase`)
4. `lightningBase.openModal()` opens the `lightningModal` component with parameters
5. Modal is displayed with custom title, message, and button
6. User interacts with the modal
7. Result is returned via Promise

## Pattern Benefits

- **Code Reusability:** Modal can be used by multiple components
- **Maintainability:** Changes to the modal automatically affect all components
- **Parameterization:** Flexibility to customize title, message, and buttons
- **Separation of Concerns:** Modal logic separated from business logic
- **Extensibility:** Easy to create new concrete components by extending `lightningBase`


