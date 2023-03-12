Component({
  props: {
    className: "",
    placeholder: "",
    focus: false,
  },
  data: {
    _value: "",
    focus: false,
  },
  didMount: function didMount() {
    this.setData({
      _value: "value" in this.props ? this.props.value : "",
      focus: this.props.focus,
    });
  },
  didUpdate: function didUpdate() {
    if ("value" in this.props && this.props.value !== this.data._value) {
      this.setData({
        _value: this.props.value,
      });
    }
  },
  methods: {
    handleInput: function handleInput(e) {
      var value = e.detail.value;

      if (!("value" in this.props)) {
        this.setData({
          _value: value,
        });
      }

      if (this.props.onInput) {
        this.props.onInput({
          type: "input",
          currentTarget: {
            id: this.props.id,
            dataset: {},
          },
          detail: {
            value,
          },
        });
      }
    },
    handleClear: function handleClear() {
      var _this = this;

      // this.setData({
      //   focus: true,
      // });
      setTimeout(function () {
        _this.handleFocus();
      }, 100);

      if (!("value" in this.props)) {
        this.setData({
          _value: "",
        });
      }

      this.doClear();
    },
    doClear: function doClear() {
      if (this.props.onClear) {
        this.props.onClear({
          type: "clear",
          currentTarget: {
            id: this.props.id,
            dataset: {},
          },
        });
      }

      if (this.props.onChange) {
        this.props.onChange({
          type: "clear",
          currentTarget: {
            id: this.props.id,
            dataset: {},
          },
          detail: {
            value: "",
          },
        });
      }
    },
    handleFocus: function handleFocus() {
      this.setData({
        focus: true,
      });

      if (this.props.onFocus) {
        this.props.onFocus({
          type: "focus",
          currentTarget: {
            id: this.props.id,
            dataset: {},
          },
        });
      }
    },
    handleBlur: function handleBlur() {
      this.setData({
        focus: false,
      });

      if (this.props.onBlur) {
        this.props.onBlur({
          type: "blur",
          currentTarget: {
            id: this.props.id,
            dataset: {},
          },
        });
      }
    },
    handleCancel: function handleCancel() {
      if (!("value" in this.props)) {
        this.setData({
          _value: "",
        });
      }

      if (this.props.onCancel) {
        this.props.onCancel({
          type: "cancel",
          currentTarget: {
            id: this.props.id,
            dataset: {},
          },
        });
      } else {
        this.doClear();
      }
    },
    handleConfirm: function handleConfirm(e) {
      var value = e.detail.value;

      if (this.props.onSubmit) {
        this.props.onSubmit({
          type: "submit",
          currentTarget: {
            id: this.props.id,
            dataset: {},
          },
          detail: {
            value,
          },
        });
      }
    },
  },
});
