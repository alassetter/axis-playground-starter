/**
 * Maps Canvas components to theme prop in TW config
 */
export default function themeComponentMapper (theme) {
  return [
    {
      component: 'Colors',
      title: 'Colors',
      data: {
        backgroundColor: theme.backgroundColor,
        borderColor: theme.borderColor,
        textColor: theme.textColor
      }
    },
    {
      component: 'Button',
      title: 'Button',
      data: theme.button
    },
    {
      component: 'Heading',
      title: 'Heading',
      data: theme.heading
    },
    {
      component: 'DescriptionList',
      title: 'DescriptionList',
      data: theme.descriptionList
    },
    {
      component: 'Chip',
      title: 'Chip',
      data: theme.chip
    },
    {
      component: 'Divider',
      title: 'Divider',
      data: theme.divider
    },
    {
      component: 'Card',
      title: 'Card',
      data: theme.card
    },
    {
      component: 'CardHeading',
      title: 'Card Heading',
      data: theme.cardHeadings
    },
    {
      component: 'FormLabel',
      title: 'FormLabel',
      data: theme.formLabel
    },
    {
      component: 'Spacing',
      title: 'Spacing',
      data: theme.spacing
    },
    {
      component: 'FontSizes',
      title: 'Font Sizes',
      data: theme.fontSize
    },
    {
      component: 'FontWeight',
      title: 'Font Weight',
      data: theme.fontWeight
    },
    {
      component: 'LetterSpacing',
      title: 'Letter Spacing',
      data: theme.letterSpacing
    },
    {
      component: 'LineHeight',
      title: 'Line Height',
      data: theme.lineHeight
    },
    {
      component: 'Screens',
      title: 'Screens',
      data: theme.screens
    },
    {
      component: 'Shadows',
      title: 'Shadows',
      data: theme.boxShadow
    },
    {
      component: 'Table',
      title: 'Table',
      data: theme.table
    },
    {
      component: 'Opacity',
      title: 'Opacity',
      data: theme.opacity
    },
    {
      component: 'BorderRadius',
      title: 'Border Radius',
      data: theme.borderRadius
    },
    {
      component: 'BorderWidth',
      title: 'Border Width',
      data: theme.borderWidth
    },
    addIfThemePropExists(theme.transitionTimingFunction, () => {
      return {
        component: 'Transitions',
        title: 'Transitions',
        data: {
          timing: theme.transitionTimingFunction,
          duration: theme.transitionDuration,
          delay: theme.transitionDelay
        }
      }
    }),
    {
      component: 'MinWidth',
      title: 'Min Width',
      data: theme.minWidth
    },
    {
      component: 'Width',
      title: 'Width',
      data: theme.width
    },
    {
      component: 'MaxWidth',
      title: 'Max Width',
      data: theme.maxWidth
    },
    {
      component: 'MinHeight',
      title: 'Min Height',
      data: theme.minHeight
    },
    {
      component: 'Height',
      title: 'Height',
      data: theme.height
    },
    {
      component: 'MaxHeight',
      title: 'Max Height',
      data: theme.maxHeight
    }
  ].filter(_ => _)
}

function addIfThemePropExists (themeProp, callback) {
  if (themeProp) return callback(themeProp)

  return false
}