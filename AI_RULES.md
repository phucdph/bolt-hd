# Hero Design System - Bolt.new AI Setup Guide

This document provides essential instructions for AI systems on how to use the Hero Design System components and layouts.

## 🏗️ System Architecture

### Tech Stack
- **Frontend Framework**: React 18 with TypeScript
- **Styling**: styled-components v5 (CRITICAL: must be version 5)
- **UI Component Library**: @hero-design/react version 8.139.0

### Project Structure
```
src/
├── components/          # All custom components (each in separate files)
├── pages/              # Page components
├── theme/              # Theme configuration
├── locales/            # Internationalization
├── utils/              # Utility functions
└── App.tsx             # Main app

docs/
├── 01-Intro.md         # Getting started guide
├── 02-Guidelines/      # Design guidelines and best practices
├── 03-Components/      # Component documentation
└── 04-Contributing/    # Contribution guidelines

rules/
└── component-usages/   # JSON files with component usage examples
```

## 📦 Component Reference

### Layout Components
| Component | Purpose | Documentation | Code Location | Usage Examples |
|-----------|---------|---------------|---------------|----------------|
| **Box** | Layout container with theme access | `docs/03-Components/Box/index.mdx` | `src/components/Box/` | `rules/component-usages/box-usage.json` |
| **Grid** | 24-column responsive grid system | `docs/03-Components/Grid/index.mdx` | `src/components/Grid/` | `rules/component-usages/grid-usage.json` |
| **Container** | Page-level container wrapper | `docs/03-Components/Container/index.mdx` | `src/components/Container/` | `rules/component-usages/container-usage.json` |
| **Avatar** | User profile images and initials | `docs/03-Components/Avatar/index.mdx` | `src/components/Avatar/` | `rules/component-usages/avatar-usage.json` |
| **Badge** | Status indicators and counters | `docs/03-Components/Badge/index.mdx` | `src/components/Badge/` | `rules/component-usages/badge-usage.json` |
| **Banner** | Important announcements | `docs/03-Components/Banner/index.mdx` | `src/components/Banner/` | `rules/component-usages/banner-usage.json` |
| **Breadcrumb** | Navigation hierarchy | `docs/03-Components/Breadcrumb/index.mdx` | `src/components/Breadcrumb/` | `rules/component-usages/breadcrumb-usage.json` |
| **Carousel** | Image and content sliders | `docs/03-Components/Carousel/index.mdx` | `src/components/Carousel/` | `rules/component-usages/carousel-usage.json` |
| **ContextPanel** | Side panel content | `docs/03-Components/ContextPanel/index.mdx` | `src/components/ContextPanel/` | `rules/component-usages/contextpanel-usage.json` |
| **Divider** | Content separators | `docs/03-Components/Divider/index.mdx` | `src/components/Divider/` | `rules/component-usages/divider-usage.json` |
| **Empty** | Empty state displays | `docs/03-Components/Empty/index.mdx` | `src/components/Empty/` | `rules/component-usages/empty-usage.json` |
| **Icon** | Vector icons | `docs/03-Components/Icon/index.mdx` | `src/components/Icon/` | `rules/component-usages/icon-usage.json` |
| **PageHeader** | Page titles and actions | `docs/03-Components/PageHeader/index.mdx` | `src/components/PageHeader/` | `rules/component-usages/pageheader-usage.json` |
| **Portlet** | Dashboard widgets | `docs/03-Components/Portlet/index.mdx` | `src/components/Portlet/` | `rules/component-usages/portlet-usage.json` |
| **Widget** | Reusable content blocks | `docs/03-Components/Widget/index.mdx` | `src/components/Widget/` | `rules/component-usages/widget-usage.json` |

### Typography Components
| Component | Purpose | Documentation | Code Location | Usage Examples |
|-----------|---------|---------------|---------------|----------------|
| **Typography.Title** | Headings (h1-h5) | `docs/03-Components/Typography/index.mdx` | `src/components/Typography/` | `rules/component-usages/typography-usage.json` |
| **Typography.Text** | Body text and labels | `docs/03-Components/Typography/index.mdx` | `src/components/Typography/` | `rules/component-usages/typography-usage.json` |

### Form Components
| Component | Purpose | Documentation | Code Location | Usage Examples |
|-----------|---------|---------------|---------------|----------------|
| **Input** | Text input fields | `docs/03-Components/Input/index.mdx` | `src/components/Input/` | `rules/component-usages/input-usage.json` |
| **Select** | Dropdown selection | `docs/03-Components/Select/index.mdx` | `src/components/Select/` | `rules/component-usages/select-usage.json` |
| **DatePicker** | Date selection | `docs/03-Components/DatePicker/index.mdx` | `src/components/DatePicker/` | `rules/component-usages/datepicker-usage.json` |
| **TimePicker** | Time selection | `docs/03-Components/TimePicker/index.mdx` | `src/components/TimePicker/` | `rules/component-usages/timepicker-usage.json` |
| **Form.Field** | Form field wrapper | `docs/03-Components/Form/index.mdx` | `src/components/Form/` | `rules/component-usages/form-usage.json` |
| **Checkbox** | Checkbox inputs | `docs/03-Components/Checkbox/index.mdx` | `src/components/Checkbox/` | `rules/component-usages/checkbox-usage.json` |
| **Radio** | Radio button inputs | `docs/03-Components/Radio/index.mdx` | `src/components/Radio/` | `rules/component-usages/radio-usage.json` |
| **Switch** | Toggle switches | `docs/03-Components/Switch/index.mdx` | `src/components/Switch/` | `rules/component-usages/switch-usage.json` |
| **Slider** | Range sliders | `docs/03-Components/Slider/index.mdx` | `src/components/Slider/` | `rules/component-usages/slider-usage.json` |
| **File** | File upload components | `docs/03-Components/File/index.mdx` | `src/components/File/` | `rules/component-usages/file-usage.json` |
| **Rate** | Star ratings | `docs/03-Components/Rate/index.mdx` | `src/components/Rate/` | `rules/component-usages/rate-usage.json` |
| **SelectButton** | Button-style selectors | `docs/03-Components/SelectButton/index.mdx` | `src/components/SelectButton/` | `rules/component-usages/selectbutton-usage.json` |
| **TagInput** | Tag input fields | N/A | `src/components/TagInput/` | N/A |

### Navigation Components
| Component | Purpose | Documentation | Code Location | Usage Examples |
|-----------|---------|---------------|---------------|----------------|
| **Button** | Action buttons | `docs/03-Components/Button/index.mdx` | `src/components/Button/` | `rules/component-usages/button-usage.json` |
| **Button.Link** | Link-style buttons | `docs/03-Components/Button/index.mdx` | `src/components/Button/` | `rules/component-usages/button-usage.json` |
| **Menu** | Navigation menus | `docs/03-Components/Menu/index.mdx` | `src/components/Menu/` | `rules/component-usages/menu-usage.json` |
| **Dropdown** | Dropdown menus | `docs/03-Components/Dropdown/index.mdx` | `src/components/Dropdown/` | `rules/component-usages/dropdown-usage.json` |
| **InPageNavigation** | In-page navigation | `docs/03-Components/InPageNavigation/index.mdx` | `src/components/InPageNavigation/` | `rules/component-usages/inpagenavigation-usage.json` |
| **Pagination** | Page navigation | `docs/03-Components/Pagination/index.mdx` | `src/components/Pagination/` | `rules/component-usages/pagination-usage.json` |
| **Tabs** | Tab navigation | `docs/03-Components/Tabs/index.mdx` | `src/components/Tabs/` | `rules/component-usages/tabs-usage.json` |
| **Steps** | Step indicators | `docs/03-Components/Steps/index.mdx` | `src/components/Steps/` | `rules/component-usages/steps-usage.json` |
| **SideBar** | Side navigation | `docs/03-Components/SideBar/index.mdx` | `src/components/Sidebar/` | `rules/component-usages/sidebar-usage.json` |

### Feedback Components
| Component | Purpose | Documentation | Code Location | Usage Examples |
|-----------|---------|---------------|---------------|----------------|
| **Alert** | Warning/info messages | `docs/03-Components/Alert/index.mdx` | `src/components/Alert/` | `rules/component-usages/alert-usage.json` |
| **Notification** | Toast notifications | `docs/03-Components/Notification/index.mdx` | `src/components/Notification/` | `rules/component-usages/notification-usage.json` |
| **Spinner** | Loading indicators | `docs/03-Components/Spinner/index.mdx` | `src/components/Spinner/` | `rules/component-usages/spinner-usage.json` |
| **Progress** | Progress bars | `docs/03-Components/Progress/index.mdx` | `src/components/Progress/` | `rules/component-usages/progress-usage.json` |
| **Modal** | Dialog windows | `docs/03-Components/Modal/index.mdx` | `src/components/Modal/` | `rules/component-usages/modal-usage.json` |
| **Tooltip** | Hover tooltips | `docs/03-Components/Tooltip/index.mdx` | `src/components/Tooltip/` | `rules/component-usages/tooltip-usage.json` |
| **Result** | Result pages | `docs/03-Components/Result/index.mdx` | `src/components/Result/` | `rules/component-usages/result-usage.json` |

### Data Display Components
| Component | Purpose | Documentation | Code Location | Usage Examples |
|-----------|---------|---------------|---------------|----------------|
| **Card** | Content containers | `docs/03-Components/Card/index.mdx` | `src/components/Card/` | `rules/component-usages/card-usage.json` |
| **Table** | Data tables | `docs/03-Components/Table/index.mdx` | `src/components/Table/` | `rules/component-usages/table-usage.json` |
| **Statistic** | Number displays | `docs/03-Components/Statistic/index.mdx` | `src/components/Statistic/` | `rules/component-usages/statistic-usage.json` |
| **Tag** | Labels and tags | `docs/03-Components/Tag/index.mdx` | `src/components/Tag/` | `rules/component-usages/tag-usage.json` |
| **Chart** | Data visualizations | `docs/03-Components/Chart/index.mdx` | `src/components/Chart/` | `rules/component-usages/chart-usage.json` |
| **Chip** | Compact elements | `docs/03-Components/Chip/index.mdx` | `src/components/Chip/` | `rules/component-usages/chip-usage.json` |
| **Collapse** | Collapsible content | `docs/03-Components/Collapse/index.mdx` | `src/components/Collapse/` | `rules/component-usages/collapse-usage.json` |
| **Comment** | Comment displays | `docs/03-Components/Comment/index.mdx` | `src/components/Comment/` | `rules/component-usages/comment-usage.json` |
| **Timeline** | Event timelines | `docs/03-Components/Timeline/index.mdx` | `src/components/Timeline/` | `rules/component-usages/timeline-usage.json` |
| **Filters** | Filter controls | `docs/03-Components/Filters/index.mdx` | `src/components/Filters/` | `rules/component-usages/filters-usage.json` |

### Utility Components
| Component | Purpose | Documentation | Code Location | Usage Examples |
|-----------|---------|---------------|---------------|----------------|
| **HeroDesignProvider** | Theme provider | `docs/03-Components/HeroDesignProvider/index.mdx` | `src/components/HeroDesignProvider/` | `rules/component-usages/herodesignprovider-usage.json` |
| **MediaQuery** | Responsive utilities | `docs/03-Components/MediaQuery/index.mdx` | `src/components/MediaQuery/` | `rules/component-usages/mediaquery-usage.json` |
| **LocaleProvider** | Internationalization | N/A | `src/components/LocaleProvider/` | N/A |
| **Portal** | Portal rendering | N/A | `src/components/Portal/` | N/A |

## 🧱 Layout Rules

### 1. Always Use Containers
**CRITICAL**: Never create content without proper containers

```jsx
// ✅ CORRECT - Proper container with padding
<Box sx={{ maxWidth: '1128px', mx: 'auto', p: 'large' }}>
  <Typography.Title level={1}>Page Title</Typography.Title>
  <Box p="medium" borderRadius="base" borderWidth="base" borderStyle="solid" borderColor="grey-light-60">
    <Typography.Text>Content with proper spacing</Typography.Text>
  </Box>
</Box>

// ❌ WRONG - No containers, content touches edges
<div>
  <h1>Page Title</h1>
  <p>Content</p>
</div>
```

### 2. Container Hierarchy
- **App Level**: `<Box sx={{ bgColor: 'grey-light-95', minHeight: '100vh' }}>`
- **Page Level**: `<Box sx={{ maxWidth: '1128px', mx: 'auto', p: 'large' }}>`
- **Content Level**: `<Box p="medium" borderRadius="base">`

## 📐 Grid Layout Rules

### 1. 24-Column System
Use responsive arrays: `[mobile, tablet, desktop, large, xlarge]`

```jsx
<Grid gutter="large">
  <Grid.Row>
    <Grid.Col span={[24, 12, 8, 6, 6]}>
      <Card>Primary content</Card>
    </Grid.Col>
    <Grid.Col span={[24, 12, 16, 18, 18]}>
      <Card>Secondary content</Card>
    </Grid.Col>
  </Grid.Row>
</Grid>
```

### 2. Standard Layouts
- **Full Width**: `span={[24, 24, 24, 24, 24]}`
- **Half Width**: `span={[24, 12, 12, 12, 12]}`
- **Third Width**: `span={[24, 8, 8, 8, 8]}`
- **Quarter Width**: `span={[24, 6, 6, 6, 6]}`

### 3. Gutters
- **Large**: `gutter="large"` (24px)
- **Medium**: `gutter="medium"` (16px)
- **Small**: `gutter="small"` (8px)

## 📏 Spacing System Rules

### 1. Theme-Based Spacing (8px Scale)
```jsx
// ✅ CORRECT - Use theme tokens
<Box mb="xxxlarge" p="large" mt="medium">

// ❌ WRONG - Hardcoded values
<div style={{ marginBottom: 48, padding: 24 }}>
```

### 2. Spacing Tokens
- `xsmall`: 4px
- `small`: 8px
- `medium`: 16px
- `large`: 24px
- `xlarge`: 32px
- `xxlarge`: 40px
- `xxxlarge`: 48px

### 3. Spacing Hierarchy
```jsx
// Section spacing (48px between major sections)
<Box mb="xxxlarge">
  {/* Component group spacing (24px between related groups) */}
  <Box mb="large">
    {/* Element spacing (16px between form elements) */}
    <Box mb="medium">
      {/* Tight spacing (8px for labels and inputs) */}
      <Box mb="small">
        <Typography.Text tagName="label">Label</Typography.Text>
      </Box>
      <Input placeholder="Value" />
    </Box>
  </Box>
</Box>
```

## 🎨 Color System Rules

### 1. Use Semantic Colors Only
**CRITICAL**: Always use semantic color names from the Hero Design color system. These colors have consistent meaning across all components and support future rebranding/white-labeling.

```jsx
// ✅ CORRECT - Semantic colors
<Box bgColor="primaryBackground" borderColor="defaultBorder" />
<Button intent="success" />
<Typography.Text color="bodyText" />
<Box bgColor="successBackground" borderColor="success" />

// ❌ WRONG - Hardcoded colors
<Box backgroundColor="rgb(29, 190, 238)" />
<Button style={{backgroundColor: "#1dbef0"}} />
<div style={{color: "purple"}} />
```

### 2. Semantic Color Categories

#### Primary Colors
- **primary**: Main brand color (violet)
- **lightPrimary**: Lighter variant (purple)
- **hoverPrimary**: Hover state
- **activePrimary**: Active state
- **primaryBackground**: Light background tint
- **primaryLightBackground**: Lighter background tint
- **primaryNeutralBackground**: Neutral background
- **primaryDarkBackground**: Dark background

#### State Colors
- **info**: Information color (dodgerBlue)
- **infoBorder**: Info border color
- **infoBackground**: Info background
- **infoDarkBackground**: Info dark background
- **hoverInfo**: Info hover state
- **activeInfo**: Info active state

- **danger**: Error/danger color (red)
- **dangerDark**: Darker danger variant
- **dangerBackground**: Danger background
- **dangerDarkBackground**: Danger dark background
- **hoverDanger**: Danger hover state
- **activeDanger**: Danger active state

- **warning**: Warning color (orange)
- **warningDark**: Darker warning variant
- **warningBackground**: Warning background
- **warningDarkBackground**: Warning dark background
- **hoverWarning**: Warning hover state
- **activeWarning**: Warning active state

- **success**: Success color (green)
- **successDark**: Darker success variant
- **successBackground**: Success background
- **successDarkBackground**: Success dark background
- **hoverSuccess**: Success hover state
- **activeSuccess**: Success active state

- **error**: Error color (pink)
- **errorDark**: Darker error variant
- **errorBackground**: Error background
- **errorDarkBackground**: Error dark background
- **hoverError**: Error hover state
- **activeError**: Error active state

#### Text Colors
- **text**: Primary text color (black)
- **bodyText**: Body text color (greyDark45)
- **subduedText**: Subdued text color (greyDark30)
- **disabledText**: Disabled text color (grey)
- **lightText**: Light text color (white)

#### Background Colors
- **defaultBackground**: Default background (greyLight90)
- **defaultLightBackground**: Light background (white)
- **defaultDarkBackground**: Dark background (black)
- **defaultGreyBackground**: Grey background (greyLight75)
- **defaultDarkGreyBackground**: Dark grey background (greyLight45)
- **neutralBackground**: Neutral background (grey)
- **neutralLightBackground**: Light neutral background (greyLight60)
- **neutralDarkBackground**: Dark neutral background (greyDark30)

#### Link Colors
- **link**: Link color (violet)
- **hoverLink**: Link hover state
- **activeLink**: Link active state

#### Border Colors
- **defaultBorder**: Default border color (greyLight60)

#### Special Colors
- **black**: Pure black
- **primaryHeaderBackground**: Header background (smaltLight90)
- **primaryRingBackground**: Ring background (smalt)
- **infoHeaderBackground**: Info header background (violetLight60)

### 3. Color Usage Guidelines

#### For Components
```jsx
// Backgrounds
<Box bgColor="defaultBackground">  // Page background
<Box bgColor="defaultLightBackground">  // Card background
<Box bgColor="primaryBackground">  // Primary accent background
<Box bgColor="successBackground">  // Success state background

// Text
<Typography.Text color="text">  // Primary text
<Typography.Text color="bodyText">  // Body text
<Typography.Text color="subduedText">  // Secondary text
<Typography.Text color="disabledText">  // Disabled text

// Borders
<Box borderColor="defaultBorder">  // Default borders
<Box borderColor="primary">  // Primary borders
<Box borderColor="success">  // Success borders

// Interactive states
<Button 
  sx={{ 
    bgColor: 'primary',
    '&:hover': { bgColor: 'hoverPrimary' },
    '&:active': { bgColor: 'activePrimary' }
  }}
>
```

#### For States and Feedback
```jsx
// Success states
<Alert intent="success" bgColor="successBackground" borderColor="success" />
<Box bgColor="successBackground" borderColor="success" />

// Warning states
<Alert intent="warning" bgColor="warningBackground" borderColor="warning" />
<Box bgColor="warningBackground" borderColor="warning" />

// Danger/Error states
<Alert intent="danger" bgColor="dangerBackground" borderColor="danger" />
<Box bgColor="errorBackground" borderColor="error" />

// Info states
<Alert intent="info" bgColor="infoBackground" borderColor="info" />
<Box bgColor="infoBackground" borderColor="info" />
```

### 4. Color Usage Rules

#### DO Use Semantic Colors
```jsx
// ✅ CORRECT - Future-proof semantic colors
<Box bgColor="primaryBackground" borderColor="defaultBorder" />
<Typography.Text color="bodyText" />
<Button intent="success" />
<Box bgColor="successBackground" />
```

#### DON'T Use Palette Colors for UI
```jsx
// ❌ WRONG - Palette colors should only be used for data visualization
<Box bgColor="violetLight30" />  // Use 'primaryBackground' instead
<Box bgColor="redLight90" />     // Use 'dangerBackground' instead
<Box bgColor="greenLight60" />   // Use 'successBackground' instead
```

#### DON'T Use Hardcoded Colors
```jsx
// ❌ WRONG - No hardcoded colors
<Box backgroundColor="#f5f5f5" />
<div style={{color: "purple"}} />
<Button style={{backgroundColor: "rgb(255, 0, 0)"}} />
```

### 5. Color Naming Convention
- Use exact semantic color names from the Hero Design system
- Colors are theme-aware and will update automatically with rebranding
- Palette colors (e.g., `violetLight30`) should only be used for data visualization, not UI components

## 📝 Quick Reference

### Essential Pattern
```jsx
// Standard page layout with semantic colors
<Box sx={{ 
  maxWidth: '1128px', 
  mx: 'auto', 
  p: 'large',
  bgColor: 'defaultBackground' 
}}>
  <Typography.Title level={1} color="text">Page Title</Typography.Title>
  <Grid gutter="large">
    <Grid.Row>
      <Grid.Col span={[24, 12, 8, 6, 6]}>
        <Card sx={{ 
          height: '100%', 
          boxShadow: 'default',
          bgColor: 'defaultLightBackground',
          borderColor: 'defaultBorder'
        }}>
          <Card.Content p="large">
            <Typography.Text color="bodyText">Content</Typography.Text>
          </Card.Content>
        </Card>
      </Grid.Col>
    </Grid.Row>
  </Grid>
</Box>
```

### Component Import
```jsx
import { Box, Typography } from './hero-design';
```

### Theme interface import
```jsx
import type { DefaultTheme } from 'styled-components';
```

## 🚫 Never Do
1. Use CSS colors (`#hex`, `rgb()`, `cyan`)
2. Use hardcoded spacing values (`16px`, `24px`)
3. Create layouts without containers
4. Ignore responsive design patterns
5. Use external UI libraries (Material-UI, Ant Design, etc.) 
6. Custom component by styled-components
```jsx
const StyledBox = styled(Box)``;
const StyledDiv = styled.div``;
```