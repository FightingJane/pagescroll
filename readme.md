# pagescroll
右侧的导航栏随页面滚动到相应位置


######共有两例子，各有优劣：
1、导航栏用div排版，跳转方法自己写，坏处就是需要多写个方法
2、导航栏用a标签排版，用a标签的锚点功能实现，缺点就是如果每个模块不够大（至少有2个模块在当前屏幕下能展示完全且没有滚动条），右侧导航的时候就不会选中最下面的那个，且刷新的时候页面也不会自动选中和当前hash值一样的模块，必须自己写方法解决，不智能
