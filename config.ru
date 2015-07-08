use Rack::Static,
  :urls => ["/images", "/js", "/styles"],
  :root => "src"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'src, max-age=86400'
    },
    File.open('src/index.html', File::RDONLY)
  ]
}
