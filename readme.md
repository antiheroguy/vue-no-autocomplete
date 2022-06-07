[![Latest Stable Version](https://img.shields.io/npm/v/vue-no-autocomplete)](https://github.com/averylongtips/vue-no-autocomplete)
[![Total Download](https://img.shields.io/npm/dt/vue-no-autocomplete)](https://github.com/averylongtips/vue-no-autocomplete)
[![License](https://img.shields.io/npm/l/vue-no-autocomplete)](https://packagist.org/packages/averylongtips/code-generator)

# Disable autocomplete directive for Vue

## Install
With NPM:
```
npm install vue-no-autocomplete
```
Or with Yarn:
```
yarn add vue-no-autocomplete
```

## Usage
```
import Vue from 'vue'
import NoAutoComplete from 'vue-no-autocomplete'

Vue.use(NoAutoComplete)
```
```
<input type="text" name="email" v-no-autocomplete />
<input type="password" name="password" v-no-autocomplete />
```