// +build !linux,!windows,!darwin,!openbsd,!freebsd

package browser

import (
	"fmt"
	"runtime"
)

func openBrowser(url string) error {
	return fmt.Errorf("openBrowser: unsupported operating system: %v", runtime.GOOS)
}
