"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      pizzaPoll: []
    };
    return _this;
  }

  _createClass(App, [{
    key: "getPizzaPoll",
    value: function getPizzaPoll(pollObj) {

      this.setState({ pizzaPoll: this.state.pizzaPoll.concat([pollObj]) });
      console.log('pizzapoll', this.state);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Choices, null),
        React.createElement(Results, null)
      );
    }
  }]);

  return App;
}(React.Component);

;

var Choices = function (_React$Component2) {
  _inherits(Choices, _React$Component2);

  function Choices(props) {
    _classCallCheck(this, Choices);

    var _this2 = _possibleConstructorReturn(this, (Choices.__proto__ || Object.getPrototypeOf(Choices)).call(this, props));

    _this2.state = {};
    return _this2;
  }

  _createClass(Choices, [{
    key: "handleChange",
    value: function handleChange(e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;


      this.setState(_defineProperty({}, name, value));
      console.log(e.target.name);

      console.log(this.state);
    }
  }, {
    key: "handleButton",
    value: function handleButton(e) {
      console.log(this.state);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "h4",
          null,
          "Choices"
        ),
        React.createElement(
          "form",
          null,
          React.createElement(
            "label",
            null,
            "Name:",
            React.createElement("input", { name: "name", type: "text", onChange: function onChange(e) {
                return _this3.handleChange(e);
              } })
          ),
          React.createElement(
            "select",
            { name: "pizzaType", onChange: function onChange(e) {
                return _this3.handleChange(e);
              } },
            React.createElement(
              "option",
              { name: "pizzaType", value: "vegan" },
              "VEGAN!!"
            ),
            React.createElement(
              "option",
              { name: "pizzaType", value: "veggie" },
              "Veggie"
            ),
            React.createElement(
              "option",
              { name: "pizzaType", value: "cheese" },
              "Cheese"
            ),
            React.createElement(
              "option",
              { name: "pizzaType", value: "combo" },
              "Combo"
            ),
            React.createElement(
              "option",
              { name: "pizzaType", value: "pepperoni" },
              "Pepperoni"
            )
          ),
          React.createElement(
            "div",
            { className: "radio" },
            React.createElement(
              "label",
              null,
              "Whole Pizza"
            ),
            React.createElement("input", { id: "pie",
              type: "radio",
              value: "pie",
              name: "pieOrSlice",
              onChange: function onChange(e) {
                return _this3.handleChange(e);
              },
              checked: this.state.pieOrSlice === 'pie' }),
            React.createElement(
              "label",
              null,
              "Slice"
            ),
            React.createElement("input", { id: "slice",
              type: "radio",
              value: "slice",
              name: "pieOrSlice",
              onChange: function onChange(e) {
                return _this3.handleChange(e);
              },
              checked: this.state.pieOrSlice === 'slice' })
          ),
          React.createElement(
            "label",
            null,
            "Number of Slices or Pizzas:",
            React.createElement("input", { name: "number", type: "number", onChange: function onChange(e) {
                return _this3.handleChange(e);
              } })
          )
        ),
        React.createElement(
          "button",
          { onClick: function onClick(e) {
              return _this3.handleButton(e);
            } },
          "Submit"
        )
      );
    }
  }]);

  return Choices;
}(React.Component);

var Results = function Results(_ref) {
  var prop = _ref.prop;
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h4",
      null,
      "results"
    )
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJwaXp6YVBvbGwiLCJwb2xsT2JqIiwic2V0U3RhdGUiLCJjb25jYXQiLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJDb21wb25lbnQiLCJDaG9pY2VzIiwicHJvcHMiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwicGllT3JTbGljZSIsImhhbmRsZUJ1dHRvbiIsIlJlc3VsdHMiLCJwcm9wIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFDTUEsRzs7O0FBQ0osaUJBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsaUJBQVc7QUFEQSxLQUFiO0FBRlk7QUFLYjs7OztpQ0FFWUMsTyxFQUFROztBQUVuQixXQUFLQyxRQUFMLENBQWMsRUFBQ0YsV0FBWSxLQUFLRCxLQUFMLENBQVdDLFNBQVgsQ0FBcUJHLE1BQXJCLENBQTRCLENBQUNGLE9BQUQsQ0FBNUIsQ0FBYixFQUFkO0FBQ0FHLGNBQVFDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCLEtBQUtOLEtBQTlCO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsT0FBRCxPQURGO0FBRUUsNEJBQUMsT0FBRDtBQUZGLE9BREY7QUFNRDs7OztFQXJCZU8sTUFBTUMsUzs7QUFzQnZCOztJQUVLQyxPOzs7QUFDSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG1IQUNYQSxLQURXOztBQUVqQixXQUFLVixLQUFMLEdBQWEsRUFBYjtBQUZpQjtBQUlsQjs7OztpQ0FFWVcsQyxFQUFHO0FBQUEsc0JBQ1VBLEVBQUVDLE1BRFo7QUFBQSxVQUNOQyxJQURNLGFBQ05BLElBRE07QUFBQSxVQUNBQyxLQURBLGFBQ0FBLEtBREE7OztBQUdkLFdBQUtYLFFBQUwscUJBQ0dVLElB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dGVudCI6WyJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGl6emFQb2xsOiBbXVxuICAgIH07XG4gIH1cblxuICBnZXRQaXp6YVBvbGwocG9sbE9iail7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtwaXp6YVBvbGwgOiB0aGlzLnN0YXRlLnBpenphUG9sbC5jb25jYXQoW3BvbGxPYmpdKX0pO1xuICAgIGNvbnNvbGUubG9nKCdwaXp6YXBvbGwnLCB0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPENob2ljZXMgLz5cbiAgICAgICAgPFJlc3VsdHMvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuY2xhc3MgQ2hvaWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCAge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtuYW1lXTogdmFsdWVcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lKTtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICB9O1xuICBoYW5kbGVCdXR0b24oZSkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDQ+Q2hvaWNlczwvaDQ+XG4gICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIE5hbWU6XG4gICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSl9IC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPHNlbGVjdCAgbmFtZT1cInBpenphVHlwZVwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSl9PlxuICAgICAgICAgICAgIDxvcHRpb24gbmFtZT1cInBpenphVHlwZVwiIHZhbHVlPVwidmVnYW5cIj5WRUdBTiEhPC9vcHRpb24+XG4gICAgICAgICAgICAgPG9wdGlvbiBuYW1lPVwicGl6emFUeXBlXCIgdmFsdWU9XCJ2ZWdnaWVcIj5WZWdnaWU8L29wdGlvbj5cbiAgICAgICAgICAgICA8b3B0aW9uIG5hbWU9XCJwaXp6YVR5cGVcIiB2YWx1ZT1cImNoZWVzZVwiPkNoZWVzZTwvb3B0aW9uPlxuICAgICAgICAgICAgIDxvcHRpb24gbmFtZT1cInBpenphVHlwZVwiIHZhbHVlPVwiY29tYm9cIj5Db21ibzwvb3B0aW9uPlxuICAgICAgICAgICAgIDxvcHRpb24gbmFtZT1cInBpenphVHlwZVwiIHZhbHVlPVwicGVwcGVyb25pXCI+UGVwcGVyb25pPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpb1wiPlxuICAgICAgICAgICAgICAgICA8bGFiZWw+V2hvbGUgUGl6emE8L2xhYmVsPlxuICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwaWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwicGllXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaWVPclNsaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnBpZU9yU2xpY2UgPT09ICdwaWUnfSAvPlxuICAgICAgICAgICAgICAgICA8bGFiZWw+U2xpY2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJzbGljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJzbGljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGllT3JTbGljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5waWVPclNsaWNlID09PSAnc2xpY2UnfSAvPlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgTnVtYmVyIG9mIFNsaWNlcyBvciBQaXp6YXM6XG4gICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJudW1iZXJcIiB0eXBlPVwibnVtYmVyXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlKX0gLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVCdXR0b24oZSl9PlN1Ym1pdDwvYnV0dG9uPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxudmFyIFJlc3VsdHMgPSAoe3Byb3B9KSA9PiAoXG4gIDxkaXY+XG4gICAgPGg0PnJlc3VsdHM8L2g0PlxuICA8L2Rpdj5cbik7XG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSlcbiJdfQ==