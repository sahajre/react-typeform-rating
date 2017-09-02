var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';

var TypeformRating = function (_React$Component) {
	_inherits(TypeformRating, _React$Component);

	function TypeformRating(props) {
		_classCallCheck(this, TypeformRating);

		var _this = _possibleConstructorReturn(this, (TypeformRating.__proto__ || Object.getPrototypeOf(TypeformRating)).call(this, props));

		_this.handleClick = function (index) {
			_this.setState(function (prevState) {
				if (prevState.rating === 0.5 && index === 1 && _this.half === 0.5) {
					return _this.setRating(0);
				} else if (prevState.rating === 0.5 && index === 1 && _this.half === 0) {
					return _this.setRating(1);
				} else if (prevState.rating === 1 && index === 1 && _this.halfStarSelection === false) {
					return _this.setRating(0);
				} else {
					return _this.setRating(prevState.tempRating);
				}
			});
		};

		_this.handleMouseMove = function (e, index) {
			_this.half = _this.halfStarSelection ? e.pageX - _this['star' + index].offsetLeft < _this['star' + index].offsetWidth / 2 ? 0.5 : 0 : 0;
			_this.setState(function (prevState) {
				if (prevState.rating === 0.5 && index === 1 && _this.half === 0.5) {
					return { tempRating: 0 };
				} else if (prevState.rating === 0.5 && index === 1 && _this.half === 0) {
					return { tempRating: 1 };
				} else if (prevState.rating === 1 && index === 1 && _this.halfStarSelection === false) {
					return { tempRating: 0 };
				} else {
					return { tempRating: index - _this.half };
				}
			});
		};

		_this.handleMouseLeave = function (index) {
			_this.setState(function (prevState) {
				return { tempRating: prevState.rating };
			});
		};

		_this.getStarClass = function (index) {
			if (index <= _this.state.rating && index <= _this.state.tempRating || index <= _this.state.tempRating) {
				return _this.selectedStar;
			} else if (index - 0.5 <= _this.state.rating && index - 0.5 <= _this.state.tempRating || index - 0.5 <= _this.state.tempRating) {
				return _this.halfSelectedStar;
			}

			return _this.emptyStar;
		};

		_this.name = props.name; //mandatory
		_this.onChange = props.onChange; //mandatory

		_this.emptyStar = props.emptyStar || "fa fa-star-o";
		_this.selectedStar = props.selectedStar || "fa fa-star";
		_this.halfSelectedStar = props.halfSelectedStar || "fa fa-star-half-empty";

		_this.value = props.value || 0;
		_this.starCount = props.starCount || 5;

		_this.halfStarSelection = props.halfStarSelection || false;
		_this.keyBasedSelection = props.keyBasedSelection || false;
		_this.isFocused = props.isFocused || false;
		_this.rightToLeft = props.rightToLeft || false;

		_this.keyPressed = props.keyPressed;

		_this.state = { rating: _this.value, tempRating: _this.value };
		return _this;
	}

	_createClass(TypeformRating, [{
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			console.log(nextProps);
			console.log("nextProps.keyPressed " + this.name + " " + nextProps.keyPressed);
			if (nextProps.keyPressed) {
				this.setState(this.setRating(nextProps.keyPressed - 48));
			}
		}
	}, {
		key: "setRating",
		value: function setRating(rating) {
			this.onChange({ name: this.name, rating: rating });
			return { rating: rating, tempRating: rating };
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var stars = [];

			var _loop = function _loop(i) {
				var index = _this2.rightToLeft ? _this2.starCount - i : i + 1;
				stars.push(React.createElement(
					"li",
					{
						key: index,
						ref: function ref(indexElem) {
							return _this2['star' + index] = indexElem;
						},
						onClick: function onClick() {
							return _this2.handleClick(index);
						},
						onMouseMove: function onMouseMove(e) {
							return _this2.handleMouseMove(e, index);
						},
						onMouseLeave: function onMouseLeave() {
							return _this2.handleMouseLeave(index);
						}
					},
					React.createElement("i", { className: _this2.getStarClass(index) })
				));
			};

			for (var i = 0; i < this.starCount; i++) {
				_loop(i);
			}

			return React.createElement(
				"ul",
				{ className: "rtr-rating" },
				stars
			);
		}
	}]);

	return TypeformRating;
}(React.Component);

export default TypeformRating;