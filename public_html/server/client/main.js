function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HomeComponent =
/*#__PURE__*/
function () {
  function HomeComponent() {
    _classCallCheck(this, HomeComponent);

    this.componentString = "HomeComponent Initialized";
  }

  _createClass(HomeComponent, [{
    key: "init",
    value: function init() {
      this.classLog();
    }
  }, {
    key: "classLog",
    value: function classLog() {
      console.log(this.componentString);
    }
  }]);

  return HomeComponent;
}();

// export { HomeComponent };
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import { HomeComponent } from './HomeComponent';

var BootstrapClientComponent = function BootstrapClientComponent() {
  _classCallCheck(this, BootstrapClientComponent);

  this.homeComponent = new HomeComponent();
  this.homeComponent.init();
};

new BootstrapClientComponent();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhvbWVDb21wb25lbnQuanMiLCJtYWluLmpzIiwiX2ludGVyZmFjZXMvSURlZmF1bHRJbnRlcmZhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxudmFyIEhvbWVDb21wb25lbnQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBIb21lQ29tcG9uZW50KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIb21lQ29tcG9uZW50KTtcblxuICAgIHRoaXMuY29tcG9uZW50U3RyaW5nID0gXCJIb21lQ29tcG9uZW50IEluaXRpYWxpemVkXCI7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSG9tZUNvbXBvbmVudCwgW3tcbiAgICBrZXk6IFwiaW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdGhpcy5jbGFzc0xvZygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbGFzc0xvZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGFzc0xvZygpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29tcG9uZW50U3RyaW5nKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSG9tZUNvbXBvbmVudDtcbn0oKTtcblxuZXhwb3J0IHsgSG9tZUNvbXBvbmVudCB9OyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL0hvbWVDb21wb25lbnQnO1xuXG52YXIgQm9vdHN0cmFwQ2xpZW50Q29tcG9uZW50ID0gZnVuY3Rpb24gQm9vdHN0cmFwQ2xpZW50Q29tcG9uZW50KCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQm9vdHN0cmFwQ2xpZW50Q29tcG9uZW50KTtcblxuICB0aGlzLmhvbWVDb21wb25lbnQgPSBuZXcgSG9tZUNvbXBvbmVudCgpO1xuICB0aGlzLmhvbWVDb21wb25lbnQuaW5pdCgpO1xufTtcblxubmV3IEJvb3RzdHJhcENsaWVudENvbXBvbmVudCgpOyIsIiJdfQ==
