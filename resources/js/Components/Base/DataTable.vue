<script setup>
import { ref } from "vue"

const emit = defineEmits(["onSearch"])
const props = defineProps({
  data: { type: [Array, null], required: true },
  fields: { type: Array, required: true },
  tableRootClass: { type: String, default: "" },
  tableClasses: { type: String, default: "base-table" },
  searchable: {
    type: Boolean,
    default: false,
  },
  filterable: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  bordered: {
    type: Boolean,
    default: true,
  },
})

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

// Get the table Head
const getTh = (col) => {
  if (typeof col === "object") {
    // eslint-disable-next-line no-prototype-builtins
    if (col.hasOwnProperty("label")) {
      return col.label
    }
    return col.field
      .split("_")
      .map((t) => capitalize(t))
      .join(" ")
  }

  return col
    .split("_")
    .map((t) => capitalize(t))
    .join(" ")
}

// Get the table Data
const getTd = (row, col) => {
  if (typeof col === "object") {
    // eslint-disable-next-line no-prototype-builtins
    if (col.hasOwnProperty("handler")) {
      return col.handler(row)
    }
    return row[col.field]
  }

  return row[col]
}

// Get Coulmn Name
const getColName = (col) => {
  if (typeof col === "object") {
    return col.field
  }
  return col
}

</script>

<template>
  <div class="table-root">
    <!-- Table -->
    <div :class="props.tableRootClass" class="table__wrapper">
      <div class="table-responsive">
        <table :class="props.tableClasses">
          <thead>
            <tr>
              <th v-for="(col, i) in props.fields" :key="i" :class="col.thClass" scope="col">
                <span class="span" :class="`${col.hideTh ? 'text-transparent' : ''}`">
                  <slot :name="`th-${getColName(col)}`" :col="col">
                    {{ getTh(col) }}
                  </slot>
                </span>
              </th>
            </tr>
          </thead>
          <tbody v-if="!props.loading">
            <tr v-for="(row, i) in props.data" :key="i" :class="{ bordered: props.bordered }">
              <td v-for="(col, i) in props.fields" :key="i" :class="col.tdClass">
                <slot :name="getColName(col)" :row="row" :col="row[getColName(col)]">
                  {{ getTd(row, col) ?? "-" }}
                </slot>
              </td>
            </tr>
          </tbody>
        </table>

        <p v-if="!props.data.length" class="mt-4 text-center">No Data Found!</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table__wrapper {
  .table-responsive {
    height: calc(100vh - 200px);
    overflow: auto;
  }
}

.base-table {
  color: #666;
  width: 100%;

  thead {
    position: sticky;
    top: 0;
    z-index: 6;

    th {
      padding: 0 !important;
      white-space: nowrap;
      text-align: left;

      &.text-right {
        text-align: right;
      }

      &.text-center {
        text-align: center;
      }

      .span {
        background-color: #f6f7fb;
        display: block;
        padding: 10px;
        margin-bottom: 5px;
        font-weight: 500;
      }

      &:first-child {
        .span {
          padding-left: 25px;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }
      }

      &:last-child {
        .span {
          padding-right: 25px;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }
      }
    }
  }

  tbody {
    tr {
      &.bordered:not(:last-child) {
        border-bottom: 1px solid #eee;
      }

      td {
        padding: 1rem 0.5rem;
        color: #666;

        &:first-child {
          padding-left: 25px;
        }

        &:last-child {
          padding-right: 25px;
        }
      }

      td.dark-black {
        color: #020918 !important;
      }
    }
  }
}
</style>
