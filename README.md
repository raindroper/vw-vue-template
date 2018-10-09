# vw-vue-template

> 2018/10/9 15:44:32 

## style预编译语言 ##

scss

## 如何使用1px像素细线 ##

	@svg 1px-border {
	  height: 2px; @rect {
	    fill: var(--color, black);
	    width: 100%;
	    height: 50%;
	  }
	}
	.hairline {
	  border: 1px solid transparent;
	  border-image: svg(1 px-border param(--color #00b1ff)) 2 2 stretch;
	}

为细线指定hairline类名即可

## 不想把px转为vw时 ##

	<div class="box ignore"></div>

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
