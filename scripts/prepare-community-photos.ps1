param(
    [Parameter(Mandatory = $true)]
    [string]$SourceDirectory
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
$photoOutputDirectory = Join-Path $PSScriptRoot '..\public'
$photoSelections = @(
    @{ Source = 'IMG_2750.jpg'; Output = 'blockcapitol-builders.jpg'; Width = 1200 },
    @{ Source = 'IMG_2750.jpg'; Output = 'blockcapitol-builders-small.jpg'; Width = 640 },
    @{ Source = 'IMG_2672.jpg'; Output = 'blockcapitol-ai-session.jpg'; Width = 1200 },
    @{ Source = 'IMG_0056.jpg'; Output = 'blockcapitol-community.jpg'; Width = 1400 },
    @{ Source = '20260430_111357.jpg.jpg'; Output = 'blockcapitol-workshop.jpg'; Width = 960 }
)
$photoCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
    Where-Object { $_.MimeType -eq 'image/jpeg' }

foreach ($photoSelection in $photoSelections) {
    $photoSource = [System.Drawing.Image]::FromFile((Join-Path $SourceDirectory $photoSelection.Source))
    try {
        if ($photoSource.PropertyIdList -contains 274) {
            $photoOrientation = [BitConverter]::ToUInt16($photoSource.GetPropertyItem(274).Value, 0)
            switch ($photoOrientation) {
                2 { $photoSource.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipX) }
                3 { $photoSource.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
                4 { $photoSource.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipX) }
                5 { $photoSource.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipX) }
                6 { $photoSource.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
                7 { $photoSource.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipX) }
                8 { $photoSource.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
            }
        }
        $photoWidth = [int][Math]::Min($photoSelection.Width, $photoSource.Width)
        $photoHeight = [int][Math]::Round($photoSource.Height * $photoWidth / $photoSource.Width)
        $photoBitmap = [System.Drawing.Bitmap]::new($photoWidth, $photoHeight)
        $photoGraphics = [System.Drawing.Graphics]::FromImage($photoBitmap)
        $photoEncoder = [System.Drawing.Imaging.EncoderParameters]::new(1)
        try {
            $photoGraphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $photoGraphics.DrawImage($photoSource, 0, 0, $photoWidth, $photoHeight)
            $photoEncoder.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new([System.Drawing.Imaging.Encoder]::Quality, [long]84)
            $photoOutputPath = Join-Path $photoOutputDirectory $photoSelection.Output
            $photoBitmap.Save($photoOutputPath, $photoCodec, $photoEncoder)
            Write-Output "$($photoSelection.Output): ${photoWidth}x${photoHeight}, $((Get-Item -LiteralPath $photoOutputPath).Length) bytes"
        }
        finally {
            $photoEncoder.Dispose()
            $photoGraphics.Dispose()
            $photoBitmap.Dispose()
        }
    }
    finally {
        $photoSource.Dispose()
    }
}
