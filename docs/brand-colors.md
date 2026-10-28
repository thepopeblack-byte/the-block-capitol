# The BlockCapitol brand colors

The website uses the six original brand tokens from `src/App.css` in repository commit `ec625ea`. The primary orange also matches the dominant opaque orange in both existing logo files, `public/main-logo.png` and `public/footer-logo.png`.

| Token     | Original color | Use                                                                           |
| --------- | -------------- | ----------------------------------------------------------------------------- |
| Primary   | `#EF411E`      | Main orange, large heading accents, icons, primary buttons and focus outlines |
| Secondary | `#FE4E16`      | Orange button hover states                                                    |
| Accent    | `#FEDA02`      | Yellow accents, prize panel, selection and light button hover states          |
| Neutral   | `#AAA8A2`      | Dividers, card borders and supporting text on dark backgrounds                |
| Dark      | `#181818`      | Text, dark sections, footer and button labels                                 |
| White     | `#FFFFFF`      | Page surfaces and text on dark backgrounds                                    |

The exact palette is centralized in `src/index.css`. Component styles reference those tokens. Only the brand dark is made transparent for shadows and photo overlays. Photographs, logos and the supplied event flyer retain their original colors.

Small text on white uses the brand dark. Primary orange buttons use dark labels; orange-on-white is reserved for large headings and non-text accents. This preserves readable contrast without inventing darker orange variants.
