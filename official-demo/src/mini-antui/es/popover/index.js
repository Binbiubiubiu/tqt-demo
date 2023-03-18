Component({
  props: {
    show: false,
    className: "",
    showMask: true,
    position: "bottomRight",
  },
  methods: {
    onMaskClick: function onMaskClick() {
      if (
        this.props.onMaskClick &&
        typeof this.props.onMaskClick === "function"
      ) {
        this.props.onMaskClick({
          type: "maskclick",
          currentTarget: {
            id: this.props.id,
            dataset: {},
          },
        });
      }
    },
  },
});
