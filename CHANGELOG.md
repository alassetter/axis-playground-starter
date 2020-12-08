# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - 12-07-2020

### Added

- Selected color property not referencing correct theme color object. Previously background, text and border were all referencing `theme.colors`. They now correctly reference `theme.backgroundColors`, `theme.textColors` and `theme.borderColors`.

## [1.0.0] - 12-05-2020

- Initial Release
