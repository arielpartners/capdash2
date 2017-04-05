# middleware to log ip address of requests
class LogMiddleware
  def initialize(app)
    @app = app
  end

  def call(env)
    request = ActionDispatch::Request.new(env)
    Thread.current[:logged_ip] = request.ip
    @app.call(env)
  ensure
    Thread.current[:logged_ip] = nil
  end
end
