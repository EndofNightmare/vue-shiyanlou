<template>
  <div class="homeNav">
    <div class="allCourses">
      <i class="fas fa-th"></i>
      <span>全部课程</span>
    </div>

    <div class="navSelection">
      <div class="navSelectionItem">路径</div>
      <div class="navSelectionItem">楼+</div>
      <div class="navSelectionItem">会员</div>
      <div class="navSelectionItem">
        社区
        <div class="subNavSelection">
          <div class="subNavSelectionItem">讨论</div>
          <div class="subNavSelectionItem">教程库</div>
          <div class="subNavSelectionItem">直播</div>
          <div class="subNavSelectionItem">比赛</div>
        </div>
      </div>
    </div>

    <div class="separator"></div>

    <div class="searchInput">
      <input type="text" name="search" class="searchInputItem">
      <i class="fas fa-search searchInputIcon"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeNav"
}
</script>

<style scoped>
.homeNav {
  /* 设置水平居中时必须指定盒子宽度*/
  width: 1140px;
  margin: 0 auto;
  /* 子元素div看作项目 */
  display: flex;
  /* 垂直居中 */
  align-items: center;
}

.allCourses {
  display: flex;
  align-items: center;
  padding: 20px 18px;
  font-size: 16px;
  width: 260px;
  background: #08bf91;
}

.navSelection {
  display: flex;
}

.navSelectionItem {
  padding: 20px 18px;
  font-size: 18px;
  color: #3a3a3a;
}

/* 子绝父相 */
.navSelectionItem:hover {
  cursor: pointer;
  color: #08bf91;
  position: relative;
}

/* 只有鼠标经过时才显示*/
.navSelectionItem:hover .subNavSelection{
  position: absolute;
  display: flex;
  left: 0;
  top: 60px;
}

.subNavSelection {
  display: none;
  flex-direction: column;
  width: 150px;
}

.subNavSelectionItem {
  padding: 15px 0 15px 15px;
  /*单独设置字体颜色，不然会继承父类*/
  color: #3a3a3a;
  text-align: left;
}

.subNavSelectionItem:hover{
  background: #f7f7f7;
  cursor: pointer;
  color: #08bf91;
}

.searchInputItem {
  border-radius: 5px;
  padding-right: 30px;
  vertical-align: middle;
  margin-right: 0.5rem;
  height: calc(1.5em + 0.5rem + 2px);
  padding: 0.25rem 2rem 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  font-weight: 400;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.searchInputItem:focus {
  border-color: #08bf91;
  outline: 0;
}

.searchInput {
  position: relative;
}

.searchInputIcon {
  position: absolute;
  right: 12px;
  color: #333;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}
.separator {
  flex-grow: 1;
}
</style>